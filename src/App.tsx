import React, { ReactNode } from 'react';

// TypeScript 4 adds incorrect dependencies

// Correct imports, added manually
// ---
// import { useFieldArray, useForm } from "react-hook-form";

// Wrong imports (added by TypeScript 4 and VSCode),
// Node is not able to use these paths since they are pointing at d.ts files.
// ---
// import { useFieldArray } from 'react-hook-form/dist/useFieldArray';
// import { useForm } from 'react-hook-form/dist/useForm';

function App() {

  // Press `Ctrl + .` (Windows) or `Cmd + .` (macOS)
  // 
  // console.log(useForm, useFieldArray);

  return <>...</>;
}

export default App;
