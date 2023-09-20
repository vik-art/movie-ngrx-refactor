import { HttpErrorResponse } from "@angular/common/http";
import { AuthResponse } from "./user-response.interface";

export interface initiaAuthlState {
    isSubmitting: boolean,
    user: AuthResponse | null,
    error: HttpErrorResponse | null,
}