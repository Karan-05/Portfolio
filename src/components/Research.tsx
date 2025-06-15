
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Research = () => {
  return (
    <section id="research" className="py-20 px-6 bg-white/70 rounded-lg shadow-md">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
            Research Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-lime-400 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-lime-50 border-lime-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-200/40">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-600 mb-4">
                Jelly Bot: Revolutionising Beach Safety
              </CardTitle>
              <div className="space-y-2 text-green-800">
                <p><strong>Published in:</strong> 2023 International Conference on Computer, Electronics & Electrical Engineering & their Applications (IC2E3)</p>
                <p><strong>Date:</strong> 08-09 June 2023, Srinagar Garhwal, India</p>
                <p><strong>Publisher:</strong> IEEE</p>
                <p><strong>DOI:</strong> 10.1109/IC2E357697.2023.10262792</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-3">Abstract</h3>
                <p className="text-green-800 leading-relaxed">
                  Drowning is a major problem in most of the world. It is the 3rd leading cause of accidental demise globally and accounts for 7% of all injury deaths. There are approximately 236,000 deaths worldwide every year due to drowning, but it is still believed that this number underestimates the actual public health problem associated with drowning.
                </p>
                <p className="text-green-800 leading-relaxed mt-4">
                  This paper proposes a solution to address this issue by introducing autonomous Jelly Bots equipped with drowning detection capabilities for deployment in high-risk areas such as beaches and ghats. The Jelly Bot offers improved rescue capabilities in uncertain situations and is computationally efficient. The proposed model utilizes a Convolutional Neural Network (CNN) for real-time video analysis to identify drowning activity with high speed and accuracy.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-3">Key Contributions</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-green-800 text-sm">91.2% accuracy in real-time drowning detection</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-green-800 text-sm">Integration of YOLO v3 and LRCN models</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-green-800 text-sm">Autonomous underwater drone implementation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-3">Impact</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-green-800 text-sm">Addresses 236,000+ annual drowning deaths</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-green-800 text-sm">Enhances beach safety infrastructure</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-green-800 text-sm">Computationally efficient solution</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => window.open("https://ieeexplore.ieee.org/document/10262792", "_blank")}
                  className="bg-gradient-to-r from-green-400 to-lime-400 hover:from-green-500 hover:to-lime-500"
                >
                  Read Full Paper
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://jelly-bot.vercel.app/home/", "_blank")}
                  className="border-lime-400 text-emerald-400 hover:bg-lime-400 hover:text-green-900"
                >
                  View Project Website
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
