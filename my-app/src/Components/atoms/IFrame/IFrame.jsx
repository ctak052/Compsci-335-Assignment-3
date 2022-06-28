import { StyledIframe, FrameContainer } from './styles'

const IFrame = (props) => {
    return (
        <FrameContainer>
            <StyledIframe key={props.iframeKey} src="http://localhost:5000/api/GetComments" title="Guest Comments" scrolling="yes" />
        </FrameContainer>
    )
}

export default IFrame