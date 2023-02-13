import styled from 'styled-components'
import {NextPage} from 'next'
import Image from 'next/image'

// 画像が表示できない

export function Contents() {
    return (
        // flex-wrapができない

        <ContentBg>
            <ContentBox>
                <p>1</p>
                <ImageBox/>
            </ContentBox>
            <ContentBox>
                <p>2</p>
                <ImageBox/>
            </ContentBox>
            <ContentBox>
                <p>3</p>
                <ImageBox/>
            </ContentBox>
            <ContentBox>
                <p>4</p>
                <ImageBox/>
            </ContentBox>
            <ContentBox>
                <p>5</p>
                <ImageBox/>
            </ContentBox>
        </ContentBg>
    )
}

export const ImageBox: React.FC = () => (
    <Image src="" width={364} height={264} alt="" />
)


const ContentBg = styled.div`
    margin-top: 70px;
    display: flex;
   
` 
const ContentBox = styled.div`
    width: 1040px;
    margin: 0 auto;
    display: flex;

`

export default Contents;