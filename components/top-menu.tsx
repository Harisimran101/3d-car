import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function TopMenu() {
  return (
    <Menubar className="px-2 lg:px-4 flex items-center justify-between">
      <div className="flex items-center">
        <MenubarMenu>
          <MenubarTrigger>GNX</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Music</MenubarTrigger>
          <MenubarContent>
            <a href="https://music.amazon.com/albums/B0DNTR5VQB" target="_blank"><MenubarItem>Amazon Music</MenubarItem></a>
            <a href="https://music.apple.com/us/album/1781270319?app=music&at=1010lIJf&ct=LFV_4cb5ead6d12bf4b07000d197c50dd249&itscg=30440&itsct=catchall_p4&lId=211586042&cId=none&sr=4&src=Linkfire&ls=1" target="_blank"><MenubarItem>Apple Music</MenubarItem></a>
            <a href="https://www.youtube.com/watch?v=YwUQ_5iV9pY&list=PLjB_8hSS2lEPSOivtbvDDugFuCeqC4_xm&src=Linkfire&lId=4a727016-6ded-42d7-b9b7-28e5a0e4025c&cId=d3d58fd7-4c47-11e6-9fd0-066c3e7a8751" target="_blank"><MenubarItem>YouTube</MenubarItem></a>
            <MenubarItem>Tidal</MenubarItem>
            <a href="https://soundcloud.com/kendrick-lamar-music/sets/gnx?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank"><MenubarItem>Soundcloud</MenubarItem></a>
          </MenubarContent>
        </MenubarMenu>
      </div>

      <img 
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-gBTVPIj5FtsQCfy1uIz67yOwyZaYlE.jpeg"
        alt="AG Logo"
        className="h-8"
      />

      <div className="flex items-center">
        <MenubarMenu>
          <MenubarTrigger>Tour</MenubarTrigger>
          <MenubarContent>
            <a href="https://www.ticketmaster.com/kendrick-lamar-tickets/artist/1480454?landing=c&awtrc=true&c=SEM_TMMCONCERTS_ggl_21989646174_173196965953_kendrick%20lamar%202025%20tickets&GCID=0&&gad_source=1&gclid=CjwKCAiA9vS6BhA9EiwAJpnXw60tuMkjOAjGtpb_tFzDVy7L8xuTfMAVHX6YaJ9KBDVbTgUqGeg09xoCQZUQAvD_BwE&gclsrc=aw.ds" target="_blank"><MenubarItem>Grand National Tour with SZA</MenubarItem></a>
            <MenubarSeparator />
            <MenubarItem inset>
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Merch</MenubarTrigger>
          <MenubarContent>
            <a href="https://shop.my-gnx.com/" target="_blank"><MenubarItem>GNX products</MenubarItem></a>
       
          </MenubarContent>
        </MenubarMenu>
      </div>
    </Menubar>
  )
}

