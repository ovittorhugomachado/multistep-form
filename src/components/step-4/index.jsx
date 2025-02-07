import { ChangePlan, ContainerStep, PlanFinish, PlanName, SubTitle, Title, Total, Text, PlanPrice, Item, PriceItem, PriceTotal, DivPlanMoreAdditionals } from "./style"
import { useContext } from "react"
import { PaymentContext } from "../../contexts/paymentContext"
import { PlanContext } from "../../contexts/planContext"
import { AdditionalsContext } from "../../contexts/additionalsContext"
import { StepContext } from "../../contexts/stepContext"
import { DivInput } from "../step-1/style"

export const ContainerStep4Component = () => {

    const { changePlan } = useContext(StepContext)

    const { payment } = useContext(PaymentContext)

    const { plan } = useContext(PlanContext)

    const { additionals } = useContext(AdditionalsContext)

    const pricePlan = payment.plans[plan].price

    const priceAdditionals = additionals.reduce((acc, item) => acc + item.price, 0);

    return (
        <>
            <ContainerStep>
                <Title>Finishing up</Title>
                <SubTitle>Double-check everything looks OK before confirming.</SubTitle>
                <DivPlanMoreAdditionals>
                <PlanFinish>
                    <Text>
                        <PlanName>{payment.plans[plan].name}</PlanName>
                        <ChangePlan onClick={() => changePlan()}>Change</ChangePlan>
                    </Text>
                    <PlanPrice>$ {payment.plans[plan].price + payment.suffix}</PlanPrice>
                </PlanFinish>
                {additionals.map((i) => (
                    <Item key={i.key}>
                        {i.name}
                        <PriceItem>$ {i.price + payment.suffix}</PriceItem>
                    </Item>
                ))}
                </DivPlanMoreAdditionals>
                
                <Total>Total<PriceTotal>$ {pricePlan + priceAdditionals + payment.suffix}</PriceTotal></Total>
            </ContainerStep>
        </>
    )
}