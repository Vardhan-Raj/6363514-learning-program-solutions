using System;

namespace FactoryMethodPatternExample
{
    class Program
    {
        static void Main(string[] args)
        {
            DocumentFactory wordFactory = new WordDocumentFactory();
            DocumentFactory pdfFactory = new PdfDocumentFactory();
            DocumentFactory excelFactory = new ExcelDocumentFactory();

            IDocument wordDoc = wordFactory.CreateDocument();
            IDocument pdfDoc = pdfFactory.CreateDocument();
            IDocument excelDoc = excelFactory.CreateDocument();

            wordDoc.Open();
            pdfDoc.Open();
            excelDoc.Open();
        }
    }
}
