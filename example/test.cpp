#include <feel/feel.hpp>

int main( int argc, char* argv[] )
{
    using namespace Feel;

    Environment env( _argc=argc, _argv=argv,
                        _about=about( _name="env",
                                            _author="Feel++ Consortium",
                                                            _email="feelpp-devel@feelpp.org") );
    std::cout << "proc " << Environment::rank()
        <<" of "<< Environment::numberOfProcessors()
        << std::endl;

    //! [vf]
    auto Vh = Pch<1> ( mesh );
    //! [form2]
    auto a = form2( Xh );
    //! [form2]
    a = integrate( _range=elements( mesh ), _expr=cst(1.0) );
    //! [vf]
}
