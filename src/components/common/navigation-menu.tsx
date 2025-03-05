import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/img/logo.png";
import { Button } from "../ui/button";
import { DropdownMenu } from "../ui/dropdown-menu";
import { Icon } from "../ui/icon";
export function NavigationMenu() {
  return (
    <header className="absolute z-50 flex w-dvw items-center justify-center">
      <nav className="hidden h-[90px] w-full items-center justify-center md:flex">
        <div className="flex h-full w-1/2 items-end justify-center">
          <div className="flex h-[60px] w-full justify-center gap-6">
            <div className="flex h-full w-[60px] items-center">
              <Image src={logo} width={60} height={60} alt="logo" />
            </div>
            <div className="flex h-full items-center gap-10">
              <Link className="text-sm uppercase text-background" href={""}>
                A Colorado
              </Link>
              <Link className="text-sm uppercase text-background" href={""}>
                Nossas cervejas
              </Link>
              <Link className="text-sm uppercase text-background" href={""}>
                Bares do Urso
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-full w-1/2 items-end justify-center">
          <div className="flex h-[60px] w-full justify-center gap-4">
            <div className="flex h-full items-center gap-10">
              <Link className="text-sm uppercase text-foreground" href={""}>
                Família do urso
              </Link>
              <Link className="text-sm uppercase text-foreground" href={""}>
                Entre em contato
              </Link>
              <Button variant={"outline"} className="text-sm uppercase">
                Loja online
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <nav className="flex h-[90px] w-full items-center justify-between bg-background px-4 md:hidden">
        <div className="flex h-full w-[60px] items-center">
          <Image src={logo} width={60} height={60} alt="logo" />
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Icon icon={"ph:list"} fontSize={30} className="text-foreground" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="mt-6 w-[100vw] rounded-t-none border-none bg-background">
            <DropdownMenu.Item>
              <Link className="text-sm uppercase text-foreground" href={""}>
                A Colorado
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link className="text-sm uppercase text-foreground" href={""}>
                Nossas cervejas
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link className="text-sm uppercase text-foreground" href={""}>
                Bares do Urso
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link className="text-sm uppercase text-foreground" href={""}>
                Família do urso
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link className="text-sm uppercase text-foreground" href={""}>
                Entre em contato
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Button variant={"outline"} className="text-sm uppercase">
                Loja online
              </Button>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </nav>
    </header>
  );
}
