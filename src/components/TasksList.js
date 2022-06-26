import {useSelector} from 'react-redux'

function TasksList() {

  const tasks = useSelector(state => state.tasks)

  return (
    <div>
      {JSON.stringify(tasks)}
    </div>
  )
}

export default TasksList