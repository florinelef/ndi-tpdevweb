import { Question } from "../models/Question"

export const getAllQuestions = (): Question[] => {
    return [
        new Question("Siphano souhaite noyer Fluffy, acceptez-vous ?", false, ["Oui", "Non"]),
        new Question("Taylor Swift souhaite prendre l'avion, voulez-vous la laisser entrer ?", false, ["Oui, Non"]),
        new Question("Cyprien a un bug, le laisser faire ?", true, ["Oui", "Non"])
    ]
}