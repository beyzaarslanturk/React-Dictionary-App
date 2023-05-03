import React from 'react'

export const ListDetails = ({ result }) => {

    const { word, phonetics, meanings } = result;

    function playAudio() {
        try {
            let audio = new Audio(phonetics[0].audio);
            audio.play();
        } catch (e) {
            console.log({ e });
        }
    }

    return (
        <div className='card'>
            <div className='p-20'>
                <h3>Word</h3>
                <div className='flex'>
                    <p>{word}</p>

                    <p className='pl-20'> {meanings[0].partOfSpeech} </p>
                    <p className='pl-20'> {phonetics[0].text} </p>
                    <div className='pl-20'>
                        <p className='audio' onClick={playAudio}>
                            {" "}
                            play audio{" "}
                        </p>
                    </div>
                </div>
            </div>

            <div className='p-20'>
                <h3>Meaning:</h3>
                <p> {meanings[0].definitions[0].definition} </p>
            </div>

            <div className='p-20'>
                <h3>Synonyms</h3>
                <p> {meanings[0].synonyms.map((item, index) => {
                    return <p key={index}> {item} </p>;
                })} </p>
            </div>
        </div>
    )
}
