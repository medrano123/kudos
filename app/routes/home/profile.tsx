import React, { useEffect, useRef, useState } from "react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { Department } from "@prisma/client"; 

import { validateName } from "~/utils/validators.server";
import { Modal } from "~/components/Modal";
import { getUser, logout, requireUserId } from "~/utils/auth.server";
import { FormField } from "~/components/FormField";
import { SelectBox } from "~/components/SelectBox";
import { departments } from "~/utils/constants";
import { deleteUser, updateUser } from "~/utils/users.server";


export const action: ActionFunction = async ({ request }) => {
	const userId = await requireUserId(request);
	const form = await request.formData();
  
	let firstName = form.get("firstName");
	let lastName = form.get("lastName");
	let department = form.get("department");
	const action = form.get("_action");

	switch (action) {
		case "save": {
		  	if (
				typeof firstName !== "string" ||
				typeof lastName !== "string" ||
				typeof department !== "string"
		 		) {
					return json({ error: "Invalid Form Data" }, { status: 400 });
		  		}
	
		  	const errors = {
				firstName: validateName(firstName),
				lastName: validateName(lastName),
				department: validateName(department),
		  	};
	
		  	if (Object.values(errors).some(Boolean))
				return json(
					{ errors, fields: { department, firstName, lastName } },
					{ status: 400 }
			);

		 	await updateUser(userId, {
				firstName,
				lastName,
				department: department as Department,
		  	});
		}
		// case "delete":
		// 	await deleteUser(userId);
		// 	return logout(request);
		default:
		  	return json({ error: "Invalid Form Data" }, { status: 400 });
	}
};




export const loader: LoaderFunction = async ({ request }) => {
	const user = await getUser(request);
	return json({ user });
};

const Profile = () => {
	const { user } = useLoaderData();
	const actionData = useActionData();
	const [formError, setFormError] = useState(actionData?.error || "");
	const firstLoad = useRef(true);

	const [formData, setFormData] = useState({
		firstName: actionData?.fields?.firstName || user?.profile?.firstName,
		lastName: actionData?.fields?.lastName || user?.profile?.lastName,
		department: actionData?.fields?.department || user?.profile?.department ||"MARKETING",	
	})

	useEffect(() => {
		if (!firstLoad.current) {
		  	setFormError("");
		}
	}, [formData]);

	useEffect(() => {
		firstLoad.current = false;
	  }, []);

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		field: string
		) => {
		setFormData((form) => ({ ...form, [field]: event.target.value }));
	};

	return (
		<Modal isOpen={true} className='w-1/3'>
      		<div className='p-3'>
			 	<h2 className='text-4xl font-black text-[#915eff] text-center mb-4'>
          			Your Profile
       	 		</h2>
				<div className='text-xs font-semibold text-center tracking-wide text-red-500 w-full mb-2'>
          			{formError}
       			</div>
				<div className='flex'>
					<div className='w-1/3'></div> {/* implement image*/}
					<div className='flex-1'>
						<form method="post">
						<FormField
							htmlFor='firstName'
							label='First Name'
							placeholder={formData.firstName}
							value={formData.firstName}
							onChange={(e) => handleInputChange(e, "firstName")}
							error={actionData?.errors?.firstName}
              			/>
						<FormField
							htmlFor='lastName'
							label='Last Name'
							placeholder={formData.lastName}
							value={formData.lastName}
							onChange={(e) => handleInputChange(e, "lastName")}
							error={actionData?.errors?.lastName}
						/>
						<SelectBox
							className='w-full rounded-xl px-3 py-2 text-gray-400'
							id='department'
							label='Department'
							name='department'
							options={departments}
							value={formData.department}
							onChange={(e) => handleInputChange(e, "department")}
						/>
						<div className='w-full text-right mt-4'>
							<button
								className='rounded-xl bg-tertiary font-semibold text-[#915eff] px-16 py-2 transition duration-300 ease-in-out hover:bg-black hover:-translate-y-1'
								name='_action'
								value='save'
							>
                  				Save
                			</button>
							<button
								name='_action'
								value='delete'
								className='rounded-xl w-full bg-tertiary font-semibold text-red-700 mt-4 px-16 py-2 transition duration-300 ease-in-out hover:bg-red-400 hover:-translate-y-1'
              				>
                			Delete Account
              				</button>
             			 </div>
						</form>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default Profile