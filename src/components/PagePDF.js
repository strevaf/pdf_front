import React, { useEffect } from 'react';
import { PDFPage, SubText } from './style';

function PagePDF(props){

    let windowWidth = window.innerWidth;  

    useEffect(() => {
        console.log('montado')

        return () => Promise.prototype.catch((err) => console.log(err))
    },[])

    return (<div style={{display: (props.renderAll ? 'block' : 'none')}}>
                <PDFPage display={props.renderAll} pageNumber={props.page} width={windowWidth*0.8} onRenderSuccess={() => (props.page === 1 ? props.setRenderAll(true) : null)  }/>
                <div style={{display: 'flex', justifyContent: 'space-between', width: windowWidth*0.8, margin: '1px'}}>
                  <SubText width={windowWidth} >unico | sign - código aquiEntraUmCodigoVindoDoDOC</SubText>
                  <SubText width={windowWidth} >Pág. {props.page}</SubText>
                </div>
              </div>)

}

export default PagePDF