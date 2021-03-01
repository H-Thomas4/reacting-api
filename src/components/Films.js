import React from 'react';


const Films = () => {

    return (
        <main className='container'>
            <section className="row jusitfy-content-center mt-5">
                {films.map(film => (
                    <div className="col-md-6" key={`film-card-${film.id}`}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title">{film.title}</h4>
                                <p className="card-text">{film.description}</p>
                            </div>
                        </div>
                    </div>
                ))};
            </section>
        </main>
        

    );
};

export default Films;

