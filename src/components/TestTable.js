import React from 'react';
import ExcelJS from 'exceljs';
import saveAs from 'file-saver';

const TestTable = () => {

    const excelDownload = () => {
        const ExcelJSWorkbook = new ExcelJS.Workbook();
        // addWorksheet : 엑셀시트 생성
        ExcelJSWorkbook.addWorksheet('test1');
        ExcelJSWorkbook.addWorksheet('test2');

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