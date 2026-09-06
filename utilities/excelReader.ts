import * as XLSX from 'xlsx';
import path from 'path';

export interface TestCaseData {
  TCName: string;
  title?: string;
  username: string;
  password: string;
  lastname?: string;
  company?: string;
}

/**
 * Reads an Excel sheet and finds the row matching the testCaseName.
 * @param filePath Path to the .xlsx file
 * @param testCaseName Name matching the TCName column
 * @param sheetName Optional sheet name (defaults to first sheet)
 */
export function getExcelTestData(
  filePath: string,
  testCaseName: string,
  sheetName?: string
): TestCaseData {
  const absolutePath = path.resolve(filePath);
  const workbook = XLSX.readFile(absolutePath);

  // Use the specified sheet or fall back to the first sheet
  const selectedSheetName = sheetName || workbook.SheetNames[0];
  const worksheet = workbook.Sheets[selectedSheetName];

  // Convert the sheet to JSON array
  const rows: TestCaseData[] = XLSX.utils.sheet_to_json(worksheet, {
    defval: '', // Returns empty string for empty cells instead of undefined
  });

  // Match row by TCName
  const record = rows.find((row) => row.TCName?.trim() === testCaseName.trim());

  if (!record) {
    throw new Error(`Test data not found for TCName: "${testCaseName}" in file: ${filePath}`);
  }

  return record;
}