import React, { useState }  from 'react';
import { pdfjs } from 'react-pdf';
import {PDFDocument} from '../components/style'
import PagePDF from '../components/PagePDF'
import { useParams, useHistory } from 'react-router-dom'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDF() {

    const [numPages, setNumPages] = useState(null);
    const [renderAll, setRenderAll] = useState(false)

    const { fileName } = useParams()
    const file = `/pdf/${fileName}.pdf`

    const history = useHistory()
  
    const onDocumentLoadSuccess = ({ numPages }) =>{
      setNumPages(numPages);
    }
  
    const arrayGenerate = (numPages) => {
      let arr = []
      for(let i = 1; i <= numPages; i++ ){
        arr.push(i)
      }
      return arr
    }
  
    return (
      <div style={{background: '#DDDDDD'}}>
          <h6 onClick={() => history.push('/')} style={{cursor: 'pointer'}}> Voltar</h6>
        <PDFDocument
          className={document}
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <h3>Documento</h3>
          {renderAll ? null : <h1>Carregando PDF</h1>}
          {arrayGenerate(numPages).map((page, index) => {
            return (<PagePDF key={index} page={page} renderAll={renderAll} setRenderAll={setRenderAll} />)
          })}
        </PDFDocument>
      </div>
    );
  }
  
  export default PDF;