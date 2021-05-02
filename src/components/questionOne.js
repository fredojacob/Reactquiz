import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

// declaro variable para la URL API
const URL = 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=boolean';
// CREO LA FUNCION QUE VA IR A LEER LAS PREGUNTAS --> TODAS
const useQuestions = () => {
    //UTILIZO HOOKS
    const [questions, setQuestions] = useState([])
    // FETCHAPI
    const refetch = async () => {
        try {
            //TRY CATCH PARA CAPTURAR ERRORES
            //AWAIT PARA ESPERAR LA DATA Y LA COLOCO EN LA VARIABLE RESPONSE
            const response = await fetch(URL)
            // CONVERTIMOS A JSON LA INFORMACION DEL ARRAY OBTENIDO
            const json = await response.json()
            // ACTUALIZAMOS LA DATA EN EL HOOCK SET 
            setQuestions(json.results)
        } catch (error) {
            // SI HAY ERROR LO MUESTRA
            console.log('error')
        }
    }
    // ACTUALIZA EL ESTADO USANDO LA FUNCION useEffect
    useEffect(() => {
        // invocamos la funcion
        refetch()
    }, [])
    // retornamos la variable con el fetch 
    return { questions, refetch }
}

// funcion de los botones 
const QuestionComponent = ({ item, onClick }) => {
    // requiere dos datos , un click y una respuesta 
    const respuestaPregunta = item.correct_answer === 'True'
    // validamos el booleano 

    return <>
        <li>{item.question}</li>
        <Button variant="primary" onClick={() => onClick(respuestaPregunta == true)}> TRUE </Button>
        <Button variant="danger" onClick={() => onClick(respuestaPregunta == false)}> FALSE </Button>
    </>
}

const QuestionOne = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const { questions, refetch } = useQuestions();


    const [respuestas, setRespuestas] = useState([])
    console.log('respuestas', respuestas)
    const grabarRespuesta = (answer) => {
        setRespuestas([...respuestas, answer])
        setCurrentQuestion(currentQuestion + 1)
    }

    const resetearTodo = () => {
        setCurrentQuestion(0)
        setRespuestas([])
        refetch()
    }
    return (
        <div>
            { currentQuestion === questions.length ? <div>Test finalizado
                <p> Respuestas correctas {respuestas.reduce((acumulador, item) => item ? acumulador + 1 : acumulador, 0)}</p>
                <Button variant="danger" onClick={() => resetearTodo()}> Resetear </Button>
            </div> :
                questions.length > 0 && <QuestionComponent item={questions[currentQuestion]} onClick={grabarRespuesta} />
            }
        </div>
    )
}
export default QuestionOne;