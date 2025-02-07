import React from "react";
import { ContainerStep, Title, SubTitle, LabelInput, Input, ErrorMessage, DivInput } from "./style";
import { IMaskInput } from "react-imask";
import { Controller } from "react-hook-form";

export const ContainerStep1Component = ({ register, errors, control }) => {
    return (
        <ContainerStep>
            <Title>Personal info</Title>
            <SubTitle>Please provide your name, address, and phone number.</SubTitle>
            <LabelInput>Name</LabelInput>
            <Input
                className={errors?.name && "input-error"}
                type="text"
                placeholder="ex. John"
                {...register("name", { required: "enter your name" })}
            />
            {errors?.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

            <LabelInput>Email</LabelInput>
            <Input
                className={errors?.email && "input-error"}
                type="email"
                placeholder="ex. john@gmail.com"
                {...register("email", {
                    required: "enter your email",
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "enter a valid email",
                    },
                })}
            />
            {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

            <LabelInput>Phone Number</LabelInput>
            <DivInput>
                <Controller
                    name="number"
                    control={control}  // Passando o control
                    rules={{
                        required: "enter your cell phone",
                        pattern: {
                            value: /^\+\d{1}\ \d{3}\ \d{3}\ \d{3}$/,
                            message: "type in the format +1 234 567 890",
                        },
                    }}
                    render={({ field }) => (
                        <IMaskInput
                            {...field} 
                            mask="+0 000 000 000"
                            placeholder="+1 234 567 890"
                            className={errors?.number && "input-error"}
                            style={{ color: 'var(--primary-color)' }}
                            onAccept={(value) => {
                                field.onChange(value);
                            }}
                        />
                    )}
                />
            </DivInput>

            {errors?.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
        </ContainerStep>
    );
};
