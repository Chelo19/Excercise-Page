import { useState } from 'react';
import AllExcercisesJson from '../../assets/all_excercises.json';
import './ExcercisesContainer.css'

function ItemsContainer(){

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
  
    // Calcula el índice inicial y final de los elementos a mostrar en la página actual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
  
    // Obtiene los elementos que se mostrarán en la página actual
    const pageItems = AllExcercisesJson.slice(startIndex, endIndex);
  
    // Función para avanzar a la siguiente página
    const nextPage = () => {
        if (endIndex < AllExcercisesJson.length) {
            setCurrentPage(currentPage + 1);
        }
    };
  
    // Función para retroceder a la página anterior
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    function Capitalize(str: string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return(
        <div className='excercises_container'>
            {pageItems.map((item) => (
                    <div className='excercise_item' key={item.id}>
                        <div className='excercise_item_info'>
                            <span>{Capitalize(item.name)}</span>
                            <div className='excercise_item_belt'>
                                <span className='excercise_item_body_part'>{Capitalize(item.bodyPart)}</span>
                                <span className='excercise_item_target'>{Capitalize(item.target)}</span>
                            </div>
                        </div>
                        <div className='excercise_item_img'>
                            <img src={item.gifUrl}/>
                        </div>
                    </div>
                ))
            }
            <div className='excercises_navigation'>
                <span className='excercises_navigation_info'>Showing results {currentPage * itemsPerPage - itemsPerPage + 1} - {currentPage * itemsPerPage + pageItems.length - itemsPerPage} of {AllExcercisesJson.length} total</span>
                <div className='excercises_navigation_buttons'>
                    <button onClick={prevPage} disabled={currentPage === 1} className='excercises_navigation_individual_button' id='excercises_navigation_individual_button_prev'>
                        Prev
                    </button>
                    <button onClick={nextPage} disabled={endIndex >= AllExcercisesJson.length} className='excercises_navigation_individual_button' id='excercises_navigation_individual_button_next'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemsContainer;