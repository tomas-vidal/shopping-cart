import React, {useState, useEffect, useContext} from "react"
import styled from "styled-components"
import { TiCancel } from "react-icons/ti"
import { CartContext } from "../context/Context"


const CartContainer = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 300px 1fr;
    background-color: #ffffff;
    position: relative;
`

const ImgCart = styled.img`
    width: 200px;
    height: 200px;
    padding: 20px 30px;
    object-fit: contain;
    justify-self: center;
    padding-right: 30px;
    border-right: 1px solid #a1a1a1;
`

const PriceCart = styled.p`
    align-self: center;
    font-weight: 300;
    letter-spacing: 3px;
`

const TitleCart = styled.p`
    color: red;
    align-self: self-end;
    font-size: 1.5rem;
    font-weight: 700;
    color: #000000;
`

const DescriptionCart = styled.p`
    color: #a1a1a1;
    font-size: .8rem;
    font-style: italic;
    align-self: self-start;
    margin-top: 5px;
`

const DetailsCartContainer = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 40% 60%;
    align-items: center;
    padding: 40px 30px 0px 0px;
`
const ShoppingCardAmount = styled.input`
    width: 30px;
    padding: 5px;
    font-size: .8rem;
    border: 2px solid #eee;
    margin-right: 2px;
`

const PriceAndQuantityContainer = styled.div`
    align-self: self-end;
    justify-self: self-end;
    display: flex;
    gap: 10px;
`

const CancelIcon = styled(TiCancel)`
    color: red;
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 1.3rem;
    cursor: pointer;
`

const ShoppingCardLabel = styled.label`
    font-size: .7rem;
    color: #a1a1a1;
    align-self: center;
`


const ItemShoppingCart = ({title, image, description, price, amount, id}) => {

    const context = useContext(CartContext);
    const [itemAmount, setItemAmount] = useState(amount);
    const [totalItemPrice, setTotalItemPrice] = useState(itemAmount * price);
    const changeAmount = (id, value) => {

        if (value <= 0) {
            setItemAmount(1);
            value = 1;
        }
        setItemAmount(value);
        context.changeAmountItem(id, value);
    }

    useEffect( () => {
        setTotalItemPrice(itemAmount * price);
    }, [itemAmount])

    return( 
        <CartContainer>
            <CancelIcon onClick={() => context.deleteItem(id)} />
            <ImgCart src={image}></ImgCart>
            <DetailsCartContainer>
                <TitleCart>{title}</TitleCart>
                <PriceAndQuantityContainer>
                    <ShoppingCardLabel for={id}>quantity</ShoppingCardLabel>
                    <ShoppingCardAmount name="quantity" id={id} type="number" value={itemAmount} onChange={(e) => {changeAmount(id, e.target.value)}}></ShoppingCardAmount>
                    <PriceCart>${totalItemPrice}</PriceCart>
                </PriceAndQuantityContainer>
                <DescriptionCart>{description}</DescriptionCart>
            </DetailsCartContainer>
        </CartContainer>
    )
}

export default ItemShoppingCart