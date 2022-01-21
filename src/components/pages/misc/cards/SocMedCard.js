import React from 'react';
import { sites } from '../../../../classes/data/SocMed';

export default function SocMedCard() {
    return (
        <div className='main__socmed'>
            <table className='main__table__center'>
                <tbody>
                    <tr>
                        {sites.map((card, key) => {
                            return (
                                <td key={key} className='main__socmed_symbols'>
                                    <a href={card.link} target="_blank" rel="noreferrer">
                                        <img align="center" alt={card.alt} width="40px" src={card.src} />
                                    </a>
                                </td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
