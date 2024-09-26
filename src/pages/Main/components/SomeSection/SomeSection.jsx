import React, { useContext, useMemo, useState } from 'react' 
import styles from './SomeSection.module.css'
import { ThemeContext } from '../../../../store/ThemeContext'
import { cn } from '../../../../constants'


const SomeSection = () => {

    const [currentImage, setCurrentImage] = useState(0)

    const examples = useMemo(() => [
        {
            src: '/src/assets/main-page/examples1.jpg',
            alt: 'examples 1',
            title: 'Some Title Here One',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas obcaecati labore nam vitae. Nihil tenetur, accusantium sequi autem quis impedit dignissimos corrupti recusandae, quibusdam blanditiis nostrum.'
        },
        {
            src: '/examples2.jpg',
            alt: 'examples 2',
            title: 'Some Title Here Two',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas obcaecati labore nam vitae. Nihil tenetur, accusantium sequi autem quis impedit dignissimos corrupti recusandae, quibusdam.'
        },
        {
            src: '/examples3.jpg',
            alt: 'examples 3',
            title: 'Some Title Here Three',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas obcaecati labore nam vitae. Nihil tenetur, accusantium sequi autem quis impedit dignissimos corrupti recusandae, quibusdam. Lorem ipsum dolor sit.'
        }
    ], [])

    const { theme } = useContext(ThemeContext)

    
    return (
        <div className={styles.container}>
            <div className={styles.tabSection}>
                <h4 className={cn(styles.title, styles[theme])}> Tab Section </h4>
                <p className={cn(styles.description, styles[theme])}> This is some text inside of a div block. </p>
            </div>
            <div className={styles.examples}>
                <div className={cn(styles.buttons, styles[theme])}>
                    <button onClick={() => setCurrentImage(0)}> Tab Button 1 </button>
                    <button onClick={() => setCurrentImage(1)}> Tab Button 2 </button>
                    <button onClick={() => setCurrentImage(2)}> Tab Button 3 </button>
                </div>
                <img src={examples[currentImage].src} alt={examples[currentImage].alt} />
                <h5 className={cn(styles.examplesTitle, styles[theme])}> {examples[currentImage].title} </h5>
                <p className={cn(styles.examplesDescription, styles[theme])}> {examples[currentImage].description} </p>
            </div>
            <hr />
        </div>
    )
}

export default SomeSection