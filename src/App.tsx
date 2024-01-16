import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from './components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Card className='w-[468px]'>
        <CardHeader>
          <CardTitle>Olá, sim</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single">
            <AccordionItem value="item-1">
              <AccordionTrigger>Nome</AccordionTrigger>
              <AccordionContent >
                Sim, sou Lucas
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
