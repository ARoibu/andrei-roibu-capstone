import './CreateExercise.scss';
import {Link} from 'react-router-dom';
export default function CreateExercise(props) {
    return(
        <div>
            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Chest")
            }} className='create-exercise__image' src='http://cdn.shopify.com/s/files/1/0038/0878/8544/articles/FeaturedImage_PulledChestMuscle.jpg?v=1592870496' alt='chest muscles drawing'/>}

            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Shoulders")
            }} className='create-exercise__image' src='https://www.sportsinjuryclinic.net/wp-content/uploads/2018/08/shoulder-pain800-800x426.jpg' alt='shoulder muscles drawing'/>}
            
            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Triceps")
            }} className='create-exercise__image' src='https://i.shgcdn.com/c39f9e9e-8e0a-4fa9-9ead-7ab7c3415c9d/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='triceps muscles drawing'/>}
            
            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Back")
            }} className='create-exercise__image' src='https://global-uploads.webflow.com/5d1d0d3f53ced35a29dbe169/5fd24b8aca69b1ab783290f8_hwYEbGij-iDlBzmrySBuACZL5sCcvTecFOExhg20NIXFyTQ9Q55fzhXIDSiMNesu5mXBOSrHysn3h57LjwtdKrBnUKb_SUy0Fmy6E0ZRTIdF0naix0TLZkNxnkIbhlrsJY4bb6bb.png' alt='back muscle diagram'/>}
            
            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Biceps")
            }} className='create-exercise__image' src='https://chiroyogaalignment.com/wp-content/uploads/2021/01/Biceps-Muscles-1024x754-1.jpg' alt='biceps muscle drawing'/>}
            
            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Legs")
            }} className='create-exercise__image' src='https://1xw7c62t8pgj1bq3qetvvsg1-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/Leg-Muscles-Running.jpg' alt='leg muscles drawing'/>}
            
            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Abs")
            }} className='create-exercise__image' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/six-pack-anatomy-1555515082.jpg?crop=1xw:1xh;center,top&resize=480:*' alt='chest muscles drawing'/>}

        
        </div>
    )
}