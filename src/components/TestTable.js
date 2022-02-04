import React from 'react';
import ExcelJS from 'exceljs';
import saveAs from 'file-saver';
import download from '../imgs/download.png'

const TestTable = () => {

    const excelDownload = () => {
        const ExcelJSWorkbook = new ExcelJS.Workbook();
        // addWorksheet : 엑셀시트 생성
        const worksheet = ExcelJSWorkbook.addWorksheet('test1');

        // mergeCells : A2 ~ I2 셀 병합
        worksheet.mergeCells("A2:I2");

        // Workbook객체에 image를 추가하고 그 image의 id를 반환받는다.
        const imageId1 = ExcelJSWorkbook.addImage({ base64: download, extension: 'png' });
        // 반환 받은 이미지의 아이디를 B2 ~ D6 에 적용시 해당 영역까지 이미지 반영
        worksheet.addImage(imageId1, 'B2:D6');

        ExcelJSWorkbook.xlsx.writeBuffer().then(function (buffer) {
            saveAs(
                new Blob([buffer], { type: 'application/octet-stream' }),
                'test.xlsx'
            );
        });
    }

    return (
        <div>
            <button onClick={() => { excelDownload() }}>엑셀 다운로드</button>
        </div>
    );
};

export default TestTable;