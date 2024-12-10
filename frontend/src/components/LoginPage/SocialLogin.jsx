import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { SocialButton } from './SocialButton';

export function SocialLogin() {
  return (
    <>
      {/* <div className="flex gap-4 mt-8">
        <SocialButton icon={Github} label="Github" />
        <SocialButton icon={Twitter} label="Twitter" />
      </div> */}

      <div className="mt-8 flex items-center">
        <div className="flex-1 border-t border-gray-200"></div>
        {/* <p className="mx-4 text-sm text-gray-600">or continue with</p> */}
        <div className="flex-1 border-t border-gray-200"></div>
      </div>
    </>
  );
}