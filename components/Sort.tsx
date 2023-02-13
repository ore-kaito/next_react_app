import styled from 'styled-components';


export function Sort() {
    return (
  
        <TextBg>
          <Text>
            <p>並び替え</p>
          </Text>
        </TextBg>
        
  
    );
  }
  
  const TextBg = styled.div`
  background-color: #333333;
`
  
  const Text = styled.text`
    border:solid 1px #c4f5f7;
    border-radius: 50px;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    border-radius: 50px;
    color: #c4f5f7;
  `;
  
  
  export default Sort;