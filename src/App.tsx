import React, { ReactNode } from 'react';

// TypeScript 4 adds incorrect dependencies (TypeScript as opposed to compiled code)

// Correct imports, added manually
// ---
// import { useFieldArray, useForm } from "react-hook-form";

// Wrong imports (added by TypeScript 4 and VSCode)
// This won't work in prod-ish Node environment once the project is compiled since the dependencies 
// are pointing at the not-compiled TypeScript as opposed JS that Node could run.
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
