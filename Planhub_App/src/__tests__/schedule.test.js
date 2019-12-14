import React from 'react';
import MainApp from '..//components/schedule';
import { render, fireEvent, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';



afterEach(cleanup);
const setup = () => {
    const utils = render(<MainApp />)
    const dateInput = utils.getByRole('date-inp')
    const taskInput = utils.getByRole('task-inp')
    return {
      dateInput,
      taskInput,
      ...utils,
    }
  }

  test('It should put input into the date input', () => {
    const { dateInput } = setup()
    fireEvent.change(dateInput, { target: { value: '20191212' } })
    expect(dateInput.value).toBe('20191212')
  })

  test('It should put input into the task input', () => {
    const { taskInput } = setup()
    fireEvent.change(taskInput, { target: { value: 'This is a task' } })
    expect(taskInput.value).toBe('This is a task')
  })




  
 
  
  