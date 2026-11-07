# Choosing Hardware for Fusion

Suppose you are building a system on which you will run Fusion, or want to upgrade your current system, or want to know if Fusion will work on your current system.  The purpose of this page is to answer the question "What kind of hardware should I have?".

The answer to this question is that it really depends what you want to do with Fusion and how much money you have to spend.  The user who creates flows with a small number (less than 20) of tools will have different requirements from the user who creates flows with 100s of tools.  It also depends on the frame format you are working with.  Someone working with NTSC/PAL footage can get by with less memory than a user working with 4K Cineon plates.  It probably also depends on how often you use Fusion - if you are working with Fusion ten hours a day you'll want Fusion to be as responsive as possible and its worth it to have a decent system, but if you just load up Fusion now and then maybe you can deal with slower interactive performance and slower renders.

Here are the [official requirements](./system-requirements.md) for Fusion 5:

**Minimum System Requirements**
- Windows 2000 / XP 
- Intel Pentium III Processor or greater 
- Nvidia/ATI Video Card - capable of displaying 1280x1024 
- 512 MB of RAM 
- 80 MB Hard Drive space

**Recommended System Requirements**

- Windows XP with /3GB switch 
- Dual Processor or Dual Core 
- Nvidia/ATI Video Card - capable of displaying 1600x1200, shader support: PS2.0/DirectX9.0 or higher, 256MB or more memory 
- 2+ GB RAM

Any rendering is going to be a balance between CPU, Memory bandwidth, and storage bandwidth. Just because you have a fast CPU doesn’t mean that you can crunch the comp at it’s maximum speed if the hard drive or network are having trouble getting the frames off the disk fast enough to feed the CPU. The memory bandwidth is the same issue, in that it may be possible for your CPU to crunch 8 frames at once, but if you multiply all the RGBA channels x 8 or 16 bits, times the resolution, times number of layers and number of frames at once, you will quickly see that you hit a huge amount of data for the front side bus (FSB) to handle.

## Chipset and CPU

Fusion is multithreaded to a very high level and will take advantage of 2, 4, 6, or 8 cores.  If you double the number of cores/processors you can expect very close to double the performance for image processing tasks.  A noteworthy exception is that increasing the number of cores doesn't help playback speed very much.  A lot of our professional level users have been working with dual or quad processor machines for many years before the first dual core processor came out.  If you are a serious user we strongly recommend you have a multi core processor or dual processor machine.

The most important thing about your motherboard/chipset is that it has a fast front side bus (FSB).  The limiting factor for playback performance in Fusion is usually the speed with which we can move information from main memory to the graphics card.  During playback, information travels along the FSB and along the AGP/PCI-Express bus, so having a fast FSB is important.  A fast FSB also helps move image data to the CPU faster when doing image processing.  At the time of writing (November 2006), we recommend having a 1066 MHz FSB with DDR2 memory to match.

## Memory

A common question we get asked is "How much memory should I have?".  The answer depends on what size of footage you are working with, how complicated your compositions are, and what operating system you are using so its hard to give a straightforward answer.  Here are some rough guidelines:
- If you are working with NTSC/PAL then 1GB is enough.  2GB is preferred especially if you work with big compositions (20+ tools).
- If you are working with HDTV 720/1080 int8 then 2GB is enough.  If you are working with big compositions (20+ tools) or with int16/float16/float32 image data we recommend 3GB.
- If you are working with anything larger (2K/4K Academy, 5K IMAX, 3K/6K Vistavision, ... etc) then you'll want 3GB or more for sure.  With the Linux/Vista/Windows7 versions of Fusion you'll want more than 3GB especially if you're working with int16/float16/float32 image data or working with large (20+ tool) compositions.

Since most motherboards have 4 or 6 RAM slots, we recommend you do not buy 4 x 512MB, but rather 2 x 1024MB (or even 2 x 2048MB), so that later if you decide you want more memory you can simply add it to the empty slots.

Having more than 4GB of installed memory on Windows 2000, Windows XP, or Windows 2003 will not help because those operating systems only allow a process to use 2GB (or 3GB) of address space.  Depending on your motherboard (some motherboards won't allow Windows to recognize more than 3GB of memory even if you have 4GB physical installed) it can be a benefit to have 4GB of memory installed even if you are using a 32-bit version of Windows - the reason being that Fusion can use 3GB leaving 1GB left for the OS, reserved driver space and other applications.

With the rising popularity of x64 processors and OS's, more cores per processor and all around increase in computer performance, 12 or 16 gigs of ram are not unheard of. In order to use that extra memory, you will need to use the x64 specific version of Fusion on an x64 bit capable OS. All 32 bit apps are limited to 3 gig of memory address space.

For more information on memory, you should read Chapter 30 "Caching and Memory Use" in the Fusion 5 Manual.

## Video Card

We strongly recommend that you use an ATI/AMD or Nvidia card.  Other cards may or may not work with Fusion so use them at your own risk.   When buying a graphics card especially avoid integrated motherboard graphics.  We also strongly recommend a PCI-Express video card - during internal testing, we've found the best hardware upgrade to improve your playback speed is to move from AGP8x to PCI-Express.

One question we get asked a lot is if you should prefer a professional level card such as a Nvidia Quadro or ATI/AMD FireGL over a consumer level card such as a Nvidia GeForce or ATI/AMD Radeon.  Our answer is that for Fusion the professional level cards don't offer a significant improvement in performance and you should save your money and buy a consumer level card.  Fusion stresses your graphics card in other ways than most 3D applications do.  If you plan to also use a 3D modeling application on your computer instead let that guide your graphics card choice.

In general, when choosing among the various consumer level cards, there's really no need for you to have to spend more than $150 - $200ish, although if you're working with large frame formats you may want to spend a bit extra and pickup a card with more memory.  If you're mostly into 2D compositing then a 64MB card should be sufficient for standard-definition work, but 128MB is a minimum for HD, and at least 256MB is recommended for film frames with floating-point data.  If you're heavily into the 3D environment in Fusion, then we'd suggest 512MB or more for large texture sizes.  When working in a 3D environment, Fusion uses all of your graphics card memory to cache textures and meshes on the card to improve interactivity, so more is often helpful.

We have not had the chance to do any internal testing with SLI and have no recommendations to make.  At this point, we do not anticipate any significant improvements in playback speed through SLI as SLI helps mostly in fillrate limited situations and playback is not fillrate limited.

Depending on the generation of the video card that you use, certain features of Fusion may or may not be available.  These features include:

- Per pixel lighting in the 3D views.  Lighting computations are done per pixel instead of per vertex in the view.  If you do not have per pixel lighting, you can not see projections (through Projector3D or Camera3D) in the view.  Certain features of shadows become visible once you switch to per pixel also.
- Hardware accelerated LUTs for the 2D views.  A hardware accelerated LUT is significantly faster than evaluating the LUT in software.
- Smooth resize in the view.  Smooth should work for all integer images.  Depending on the graphics card it will also work for float images.
- On some cards floating point images are uploaded as 8bit clamping the image's pixels to the 0..1 range for performance reasons.  This affects hardware LUTs since the LUT gets applied after the color data has been crushed to the 0..1 range, which may cause problems if you work with out-of-range colors.  To work around this you will have to use software LUTs which are slower, or (as of 5.1) use the Texture Depth setting to force textures to Native depth. Both settings can be changed in [Prefs/Tweaks](index56c2-2.html?title=Eyeon:Manual/Preferences/PrefsTweaks&action=edit&redlink=1).
- A Quadro based video card is required to support quad-buffered stereo display devices.

## Hard Drives & Network

If what you're doing uses a lot of memory (working with the larger frame formats 2K+ and int16/float16/float32 image data) you'll find that Fusion spends a lot of time reading and writing information from the disk or network.  Having a fast drive/network can significantly speed things up in such situations.

Sisoft Sandra ([http://www.sisoftware.net/](http://www.sisoftware.net/)) is a good benchmark util that will tell you what the limits of your current system are and give you a benchmark you can work from. You may find that your current drives are only putting out (for instance) 150 meg/sec rather than 300 or 600. You may want to look into striping a set of drives under virtual raid or a physical raid to improve this number etc.

If you have any experiences you wish to share or disagree with anything on this page, please by all means contact us at [mailto:tech@eyeonline.com](mailto:tech@eyeonline.com).

