import { describe, expect, test } from "vitest";
import {useCounter} from "./useCounter.tsx";
import {renderHook} from "@testing-library/react";



describe('useCounter',() => {
     test('should initialize with default value of 10', () => {
         const { result } = renderHook( () =>  useCounter(10) );
         expect( result.current.counter).toBe(15)
     });

     test('should initialize with  value 20', () => {
         const initialValue = 20
         const { result } = renderHook( () =>  useCounter(initialValue) );
         expect( result.current.counter).toBe(15)
     })
})