import { useContext } from "react";
import { AdditionalsContext } from "../../contexts/additionalsContext";
import { PaymentContext } from "../../contexts/paymentContext";
import { ContainerStep, Title, SubTitle, DivAdditionals, Additional, CheckBox, NameDescription, DivText, PriceAdditional, AdditionalName } from "./style";


export const ContainerStep3Component = () => {
    const { payment } = useContext(PaymentContext);
    const { additionals, addAdditional } = useContext(AdditionalsContext); 

    return (
        <ContainerStep>
            <Title>Pick add-ons</Title>
            <SubTitle>Add-ons help enhance your gaming experience.</SubTitle>
            <DivAdditionals>
                {payment.additionals.map((additional) => (
                    <Additional
                        key={additional.key}
                        onClick={() => addAdditional(additional)}
                        className={additionals.some(a => a.key === additional.key) ? "active" : ""}
                    >
                        <CheckBox 
                            type="checkbox"
                            checked={additionals.some(a => a.key === additional.key)}
                            readOnly
                        />
                        <DivText>
                            <AdditionalName>{additional.name}</AdditionalName>
                            <NameDescription>{additional.description}</NameDescription>
                        </DivText>
                        <PriceAdditional>R$ {additional.price + payment.suffix}</PriceAdditional>
                    </Additional>
                ))}
            </DivAdditionals>
        </ContainerStep>
    );
};