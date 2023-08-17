import styled from 'styled-components';



export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:15%;
margin-bottom:15%;

.link{

text-decoration:none;
color:#7400FF;
}
.text{
color:#94A3B8;
}

`
export const ContainerHead = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-bottom:20px;

.title{
text-align: center;
font-size: 44px;
font-style: normal;
font-weight: 800;
line-height: 44px;
letter-spacing: -0.45px;
margin-top:-10px;
}
`

export const ContainerFrom = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`

export const SecondLabels = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
gap:15px;


.input {

    background-color:#1E293B;
    border-radius:5px;
    color:#64748B;
    border:0px solid transparent;
    height:40px;
    margin-top:-5px;
    padding:7px;
    width:300px;
}


`

export const Button = styled.button`

background-color:#7400FF;
width: 315px;
height: 36px;
border-radius:20px;
border:0px solid transparent;
margin-top:20px;
margin-bottom:15px;
color:white;
font-weight:bold;

`
