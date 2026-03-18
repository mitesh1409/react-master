import Tag from '../Tag/Tag';
import './TaskForm.css';

function TaskForm() {
  return (
    <div className='task_form'>
        <form>
            <input
                type='text'
                className='task_input'
                placeholder='Enter task details'
            />
            <div className='task_form_bottom'>
                <div>
                    <Tag name="Dev"/>
                    <Tag name="QA"/>
                    <Tag name="Product Owner"/>
                </div>

                <div>
                    <select className='task_status'>
                        <option value='ready-for-development'>Ready for Development</option>
                        <option value='in-progress'>In Progress</option>
                        <option value='ready-for-test'>Ready for Test</option>
                        <option value='closed'>Closed</option>
                    </select>

                    <button type='submit' className='task_submit'>+ Add</button>
                </div>
            </div>
        </form>
    </div>
  );
}

export default TaskForm;
