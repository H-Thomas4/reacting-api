import React from 'react';

const People = () => {
    
    return (
        <main className='container'>
            <section className="row jusitfy-content-center mt-5">
                {people.map(people => (
                     <div className="col-md-6" key={`people-card-${people.id}`}>
                         <div className="card shadow my-2">
                             <div className="card-body">
                                <h4 className="card-title">{people.name}</h4>
                                <p className="card-text">{people.age}</p>
                                <p className="card-text">{people.gender}</p>
                                
                            </div>
                        </div>
                    </div>
                ))};
            </section>
        </main>
            
        );

}

export default People;