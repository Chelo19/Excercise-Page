import { useState } from 'react';
import './ExcercisesContainer.css'

function ExcercisesContainer({ data }: { data : any }){
    
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
  
    const pageItems = data.slice(startIndex, endIndex);
  
    const nextPage = () => {
        if (endIndex < data.length) {
            setCurrentPage(currentPage + 1);
        }
    };
  
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
            {pageItems.map((item : any) => (
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
                {data.length > 0 ?
                    <>
                        <span className='excercises_navigation_info'>Showing results {currentPage * itemsPerPage - itemsPerPage + 1} - {currentPage * itemsPerPage + pageItems.length - itemsPerPage} of {data.length} total</span>
                        <div className='excercises_navigation_buttons'>
                            <button onClick={prevPage} disabled={currentPage === 1} className='excercises_navigation_individual_button' id='excercises_navigation_individual_button_prev'>
                                Prev
                            </button>
                            {data.length < itemsPerPage ? 
                                <button onClick={nextPage} disabled={true} className='excercises_navigation_individual_button' id='excercises_navigation_individual_button_next'>
                                    Next
                                </button>
                                :
                                <button onClick={nextPage} disabled={endIndex >= data.length} className='excercises_navigation_individual_button' id='excercises_navigation_individual_button_next'>
                                    Next
                                </button>
                            }
                        </div>
                    </>
                    :
                    <>
                        <span className='excercises_navigation_info'>No se encuentran resultados</span>
                    </>
                }
            </div>
        </div>
    );
}

export default ExcercisesContainer;