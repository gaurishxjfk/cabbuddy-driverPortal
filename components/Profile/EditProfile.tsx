import { DriverProfileValues, FileWithSizeAndType } from "@/Types";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import CustomFileUpload from "../InputComp/CustomFileUpload";
import CustomInput from "../InputComp/CustomInput";
import CustomDropDown from "../InputComp/CustomDropDown";
import Image from "next/image";
import { Cross } from "../SVGIcons";
//bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10
const EditProfile = () => {
  const formik = useFormik<DriverProfileValues>({
    initialValues: {
      mobileNo: "",
      address: "",
      state: "",
      pincode: "",
      profileImage: null,
    },

    validationSchema: Yup.object({
      mobileNo: Yup.string()
        .matches(/^\d{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
      address: Yup.string().required("Address is required"),
      state: Yup.string().required("State is required"),
      pincode: Yup.string()
        .matches(/^\d{6}$/, "Pincode must be 6 digits")
        .required("Pincode is required"),
      profileImage: Yup.mixed()
        .test("fileSize", "File size must be less than 2MB", function (value) {
          if (!value) return false;
          const fileValue = value as FileWithSizeAndType; // Type assertion
          return fileValue.size <= 2 * 1024 * 1024;
        })
        .test(
          "fileType",
          "Only JPEG or PNG file formats are allowed",
          function (value) {
            if (!value) return false;
            const fileValue = value as FileWithSizeAndType; // Type assertion
            return ["image/jpeg", "image/png"].includes(fileValue.type);
          }
        ),
    }),

    onSubmit: (values) => {        
      console.log("form submitted",values);
      console.log(JSON.stringify(values));
    },
  });
  return (
    <section
      className="relative w-10/12
                  bg-darkText bg-opacity-30 backdrop-blur-md py-8 rounded-xl mx-auto shadow-2xl"
    >
        <button className="absolute right-4 top-4 md:right-8"><Cross height={25} width={25} fill="#02283F" /></button>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col rounded-lg w-[95%] md:w-[80%] mx-auto py-4"
      >
        <div className="flex items-end mb-4">
          {formik.values.profileImage && !formik.errors.profileImage && (
            <Image
              src={URL.createObjectURL(formik.values.profileImage)}
              alt="driver img"
              width={135}
              height={135}
              className="bg-red-500 rounded-full w-[7em] h-[7em] p-[.15em] bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-sky-400 via-blue-600 to-darkText"
            />
          )}
          <CustomFileUpload
            name="profileImage"
            label=""
            value={formik.values.profileImage}
            error={formik.errors.profileImage}
            touched={formik.touched.profileImage}
            handleChange={formik.setFieldValue}
            handleBlur={formik.handleBlur}
            className="bg-white bg-opacity-90"
          />
        </div>
        <CustomInput
            type="number"
            label={"Mobile Number"}
            name="mobileNo"
            placeholder="9283255444"
            value={formik.values.mobileNo}
            error={formik.errors.mobileNo}
            touched={formik.touched.mobileNo}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            className="bg-white bg-opacity-90 mb-4"
          />
        <CustomInput
          type="text"
          label={"Address"}
          name="address"
          placeholder="Enter your address"
          value={formik.values.address}
          error={formik.errors.address}
          touched={formik.touched.address}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          className="bg-white bg-opacity-100"
        />
        <div className="flex flex-col md:flex-row my-4">
          <CustomDropDown
            label="State"
            name="state"
            value={formik.values.state}
            error={formik.errors.state}
            touched={formik.touched.state}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            options={[
              { value: "state1", label: "State 1" },
              { value: "state2", label: "State 2" },
            ]}
            className="bg-white bg-opacity-90 rounded"
          />
          <CustomInput
            type="number"
            label={"Pincode"}
            name="pincode"
            placeholder="Enter your pincode"
            value={formik.values.pincode}
            error={formik.errors.pincode}
            touched={formik.touched.pincode}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            className="bg-white bg-opacity-90 "
          />
        </div>
        <button
          type="submit"
          className="bg-darkText py-2 mt-3 rounded-lg text-white font-bold mx-4"
        >
          Update
        </button>
      </form>
    </section>
  );
};

export default EditProfile;
