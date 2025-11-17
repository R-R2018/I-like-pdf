import React from 'react';
import { useNavigation } from '../context/NavigationContext';

const About: React.FC = () => {
    const { setPage } = useNavigation();

    return (
        <div className="py-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                        About <span className="text-red-600">I like pdf</span>
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-600">
                        Making PDF management simple, accessible, and free for everyone.
                    </p>
                </div>

                <div className="mt-16 space-y-12">
                    <section>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center sm:text-left">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Our mission is to provide a comprehensive, intuitive, and secure suite of PDF tools that anyone can use, anywhere, without cost. We believe in empowering students, professionals, and individuals by removing the barriers to efficient document workflow. Whether you're converting a file for a class project, merging reports for work, or securing a sensitive document, we're here to make it effortless.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center sm:text-left">Our Story</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Born from the frustration of dealing with clunky, expensive, and ad-riddled PDF software, 'I like pdf' was created as a breath of fresh air. A small team of developers and designers who shared a common goal came together: to build a platform that we would genuinely love to use. A platform that is fast, beautiful, and, most importantly, respects user privacy. We started with a few core tools, and thanks to the support of our users, we've grown into the comprehensive toolkit you see today.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Commitment</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Centric Design</h3>
                                <p className="text-gray-600">Our interface is clean and straightforward. No confusing menus, no hidden features. Just the tools you need, right where you expect them to be.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security & Privacy First</h3>
                                <p className="text-gray-600">Your files are your own. We process them on our servers but automatically delete them after a few hours. We'll never share or look at your content.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Free and Accessible</h3>
                                <p className="text-gray-600">We believe essential tools should be available to everyone. Our core features will always be free to use, supported by non-intrusive advertising.</p>
                            </div>
                        </div>
                    </section>
                </div>
                
                <div className="text-center mt-16">
                    <button
                        onClick={() => setPage('home')}
                        className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors duration-200 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Explore Our Tools
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
