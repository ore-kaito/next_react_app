import styled from 'styled-components'
import {NextPage} from 'next'
import Image from 'next/image'


export function Contents() {
    return (
        // flex-wrapができない

        <ContentBg>
            <ContentBoxes>
                <ContentBox>
                    <ParagraghCenter>
                        <p>1</p>
                    </ParagraghCenter>
                    <Link href="/">
                    <ImageBox/>
                    </Link>
                    
                </ContentBox>
                <ContentBox>
                    <ParagraghCenter>
                        <p>2</p>
                    </ParagraghCenter>
                    <Link href="/">
                    <ImageBox/>
                    </Link>
                </ContentBox>
                <ContentBox>
                    <ParagraghCenter>
                        <p>3</p>
                    </ParagraghCenter>
                    <Link href="/">
                    <ImageBox/>
                    </Link>
                </ContentBox>
            </ContentBoxes>
            
            <ContentBoxes>
            <ContentBox>
                <ParagraghCenter>
                    <p>4</p>
                </ParagraghCenter>
                    <Link href="/">
                    <ImageBox/>
                    </Link>
                    
                </ContentBox>
                <ContentBox>
                    <ParagraghCenter>
                        <p>5</p>
                    </ParagraghCenter>
                    <Link href="/">
                    <ImageBox/>
                    </Link>
                </ContentBox>
                <ContentBox>
                    <ParagraghCenter>
                        <p>6</p>
                    </ParagraghCenter>
                    <Link href="/">
                    <ImageBox/>
                    </Link>
                </ContentBox>
            </ContentBoxes>
        </ContentBg>
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


// エラー出ないように定義だけしてる
const Link = styled.a`

  `;

export default Contents;