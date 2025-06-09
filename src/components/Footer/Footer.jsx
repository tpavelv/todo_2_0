import TaskFilters from '../TaskFilters/TaskFilters'
const Footer = () => {
  return (
    <footer className="footer">
      <span className="todo-count">Осталось: 3</span>
      <TaskFilters />
      <button className="clear-completed">Удалить готовые</button>
    </footer>
  )
}
export default Footer
