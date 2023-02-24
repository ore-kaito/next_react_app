import styled from 'styled-components'
import {NextPage} from 'next'
import Image from 'next/image'
import Sort from "components/Sort"
import { MenuTabContents } from "components/Menu_wrap/MenuTabContents"

export function Contents() {
    return (
        <>
        <Sort />
        <MenuTabContents />
        </>  
    )
}

export const ImageBox: React.FC = () => (
    <Image src="" width={364} height={264}  alt="" />
)

// Contentsの背景
const ContentBg = styled.div`
    margin-top: 70px;
` 

// 動画３を1つの単位にした
const ContentBoxes = styled.div`
    display:flex;
`

const ContentBox = styled.div`
    width: 1040px;
    margin: 0 auto;
    display: flex;
    
`
const ParagraghCenter = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
`

export default Contents;