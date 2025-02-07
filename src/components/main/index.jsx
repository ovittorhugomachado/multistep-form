import { Container, Buttons, ButtonNext, ButtonConfirm, ButtonBack } from "./style";
import { useContext } from "react";
import { StepContext } from "../../contexts/stepContext";
import { useForm } from "react-hook-form";
import { ContainerStep1Component } from "../step-1";
import { ContainerStep2Component } from "../step-2";
import { ContainerStep3Component } from "../step-3";
import { ContainerStep4Component } from "../step-4";
import { ContainerStep5Component } from "../step-5";

export const Main = ({ children }) => { 

    const { currentStep, nextStep, prevStep } = useContext(StepContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        control
    } = useForm(); 


    const onSubmit = () => { 
        nextStep();
    };

    const steps = [
        <ContainerStep1Component key={0} register={register} errors={errors} control={control} />,
        <ContainerStep2Component key={1} register={register} errors={errors} clearErrors={clearErrors}/>,
        <ContainerStep3Component key={2} />,
        <ContainerStep4Component key={3} />,
        <ContainerStep5Component key={4} />,
    ];

    return ( 
        <>
            <Container>
                {children} 
                {steps[currentStep]} 
                <Buttons>
                    <ButtonBack onClick={prevStep} className={currentStep < 1 ? "disable" : ""}>
                        Go back
                    </ButtonBack>
                    <ButtonNext onClick={handleSubmit(onSubmit)} className={currentStep > 2 ? "disable" : ""}>
                        Next Step
                    </ButtonNext>
                    <ButtonConfirm onClick={nextStep} className={currentStep < 3 || currentStep === 4 ? "disable" : ""}>
                        Confirm
                    </ButtonConfirm>
                </Buttons>
            </Container>
        </>
    );
};
