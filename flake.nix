{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:Nixos/nixpkgs/nixos-22.05";
  };

  outputs = { self, nixpkgs }: let 
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
  in {
    devShells.${system} = {
      default = pkgs.callPackage ./shell.nix { inherit pkgs; };
    };

    packages.${system}.hello = pkgs.hello;
    packages.${system}.default = pkgs.hello;
  };
}
