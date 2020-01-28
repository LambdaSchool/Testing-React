import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom";
import StarWarsCharacters from "./StarWarsCharacters.js";
import { getData as mockGetData } from "../api";