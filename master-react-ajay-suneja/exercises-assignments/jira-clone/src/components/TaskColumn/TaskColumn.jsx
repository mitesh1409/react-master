import './TaskColumn.css';

function TaskColumn(props) {
  let iconName = null;
  if (props.title === 'Ready for Development') {
    iconName = 'code';
  }

  if (props.title === 'In Progress') {
    iconName = 'clock_loader_60';
  }

  if (props.title === 'Ready for Test') {
    iconName = 'science';
  }

  if (props.title === 'Closed') {
    iconName = 'check_box';
  }

  return (
    <div>
      <section className='task_column'>
        <span className="material-symbols-outlined">
          { iconName }
        </span>
        <h2 className='task_column_heading'>{ props.title }</h2>
      </section>
    </div>
  );
}

export default TaskColumn;
