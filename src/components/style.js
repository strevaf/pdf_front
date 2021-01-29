import styled from 'styled-components'
import {Document, Page} from 'react-pdf'

export const PDFDocument = styled(Document)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: auto
`

export const PDFPage = styled(Page)`
    margin: 1px auto 1px auto;
    display: ${props => props.display ? 'block' : 'none'};
`

export const SubText = styled.p`
    font-size: ${props => `${props.width*0.02}px`}
`