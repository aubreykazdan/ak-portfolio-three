import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Container from "../container";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({}) {
  return (
    <Popover className="relative shadow z-50">
      <Container>
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div>
            <span className="sr-only">Aubrey Kazdan's Logo</span>
            <Link href="/">
              <img
                className="w-auto h-14"
                src="/assets/logo.svg"
                alt="Aubrey Kazdan's Logo"
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Link href="/about" className="nav-item">
                About
              </Link>
              <Link href="/projects" className="nav-item">
                Projects
              </Link>
              <Link href="/blog" className="nav-item">
                Blog
              </Link>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <a href="mailto:aubrey.j.kazdan@gmail.com" className="btn btn-lg">
                Contact
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <img
                      className="h-14 w-auto"
                      src="/assets/logo.svg"
                      alt="Aubrey Kazdan's Logo"
                    />
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid gap-4">
                  <Link href="/about" className="nav-item">
                    About
                  </Link>
                  <Link href="/projects" className="nav-item">
                    Projects
                  </Link>
                  <Link href="/blog" className="nav-item">
                    Blog
                  </Link>
                </div>
                <div className="mt-6">
                  <a
                    href="mailto:aubrey.j.kazdan@gmail.com"
                    className="btn btn-lg"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Container>
    </Popover>
  );
}
