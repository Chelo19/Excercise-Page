import { useEffect } from 'react';
import './SmallCards.css';
import BodyPartsByRegionJson from '../../assets/body_parts_by_region.json';

function SmallCards({ excercise }: { excercise: any }){

    useEffect(() =>{
        getRegion(excercise);
    }, []);

    function getRegion(item: any){
        let fRegion = '';
        
        BodyPartsByRegionJson.forEach(region => {
            region.bodyParts.forEach(bodyPart => {
                if(bodyPart == item.bodyPart){
                    fRegion = region.name;
                }
            });
        });
        Capitalize(fRegion);
        return fRegion;
    }

    function Capitalize(str: string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return(
        <div className="small_cards">
            <div className='small_card_item'>
                <span>Region</span>
                <div className='small_card'>
                    <div className='small_card_bg'>
                        <img src={`../src/assets/${getRegion(excercise)}.png`} />
                    </div>
                    <div className='small_card_hover'>
                        <span>{getRegion(excercise)}</span>
                    </div>
                </div>
            </div>
            <div className='small_card_item'>
                <span>Body Part</span>
                <div className='small_card'>
                    <div className='small_card_bg'>
                        <img src={`../src/assets/${excercise.bodyPart}.png`} />
                    </div>
                    <div className='small_card_hover'>
                        <span>{Capitalize(excercise.bodyPart)}</span>
                    </div>
                </div>
            </div>
            <div className='small_card_item'>
                <span>Target</span>
                <div className='small_card'>
                    <div className='small_card_bg'>
                        <img src={`../src/assets/${excercise.target}.png`} />
                    </div>
                    <div className='small_card_hover'>
                        <span>{Capitalize(excercise.target)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallCards;