{
  description = "Crimson Defense website (Eleventy + Cloudflare Workers)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          packages = [
            pkgs.nodejs_22
            pkgs.pnpm
            pkgs.wrangler
          ];

          shellHook = ''
            echo "Crimson Defense website dev shell (node $(node --version), pnpm $(pnpm --version))"
          '';
        };
      });
}
